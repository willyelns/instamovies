import React, { useState, useEffect, useCallback } from "react";
import { FlatList } from "react-native";
import {
  Container,
  Header,
  Movie,
  Name,
  Description,
  VoteText,
  Rate,
  Resume,
  ResumeItem,
  ResumeVotes,
  ResumeText,
  VoteNumber,
  ResumeBlock
} from "./styles";
import { Loading } from "../../common/styled-components/styles";
import { ENVIRONMENT } from "../../../constants/environment";
import LazyImage from "../../common/lazy-image";
import { Ionicons } from "@expo/vector-icons";
import HttpClient from "../../../services/HttpClient";
import MovieConfig from "../../../services/MovieConfig";

export default function HomePage({ navigation }) {
  const [movies, setMovie] = useState([]);
  const [page, setPage] = useState(1);
  const [total, setTotal] = useState(0);
  const [loading, setLoading] = useState(false);
  const [refreshing, setRefreshing] = useState(false);
  const [viewable, setViewable] = useState([]);
  const [image, setImageConfig] = useState({});

  async function getImageConfig() {
    const { images } = await MovieConfig.getConfig();
    setImageConfig(images);
  }

  async function getMovies(pageNumber = page, shouldRefresh = false) {
    const { results, total_pages } = await HttpClient.get(
      `${ENVIRONMENT.API.BASE_URL}/movie/upcoming?api_key=${ENVIRONMENT.API.KEY}&language=${ENVIRONMENT.LANGUAGE}-US&page=${pageNumber}`
    );
    setTotal(total_pages);
    setMovie(shouldRefresh ? results : [...movies, ...results]);
    setPage(pageNumber + 1);
  }

  async function loadPage() {
    if (total && pageNumber > total) return;

    setLoading(true);
    await getImageConfig();
    await getMovies();
    setLoading(false);
  }

  useEffect(() => {
    loadPage();
  }, []);

  async function refreshList() {
    setRefreshing(true);
    await getMovies(1, true);
    setRefreshing(false);
  }

  const handleViewableChanged = useCallback(({ changed }) => {
    setViewable(changed.map(({ item }) => item.id));
  }, []);

  return (
    <Container>
      <FlatList
        data={movies}
        keyExtractor={movie => String(movie.id)}
        onEndReached={() => {
          loadPage();
        }}
        onEndReachedThreshold={0.1}
        ListFooterComponent={loading && <Loading />}
        onRefresh={refreshList}
        refreshing={refreshing}
        onViewableItemsChanged={handleViewableChanged}
        viewabilityConfig={{ viewAreaCoveragePercentThreshold: 20 }}
        renderItem={({ item }) => (
          <Movie>
            <Header>
              <Name>{item.title}</Name>
              <Rate>{item.vote_average}</Rate>
            </Header>

            <LazyImage
              navigation={navigation}
              movieId={item.id}
              touchable={true}
              source={{
                uri: `${image.secure_base_url}${ENVIRONMENT.IMAGE.BASE_WIDTH}${item.poster_path}`
              }}
              smallSource={{
                uri: `${image.secure_base_url}${ENVIRONMENT.IMAGE.SMALL_WIDTH}${item.poster_path}`
              }}
              shouldLoad={viewable.includes(item.id)}
            />

            <Resume>
              <ResumeBlock>
                <ResumeItem>
                  <Ionicons name="md-calendar" size={15} />
                  <ResumeText>{item.release_date}</ResumeText>
                </ResumeItem>
                <ResumeItem>
                  <Ionicons name="md-heart" size={15} />
                  <ResumeText>{item.popularity}</ResumeText>
                </ResumeItem>
              </ResumeBlock>
              <ResumeVotes>
                <VoteNumber>{item.vote_count}</VoteNumber>
                <VoteText> Votes</VoteText>
              </ResumeVotes>
            </Resume>
            <Description>{item.overview}</Description>
          </Movie>
        )}
      />
    </Container>
  );
}
