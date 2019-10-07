import React, { useEffect, useState } from "react";
import {
  Container,
  Title,
  Details,
  ResumeRow,
  Resume,
  ResumeInfo,
  ReleaseDate,
  ReleaseText,
  Popularity,
  PopularityText,
  BulletTitle,
  Bullet,
  Summary
} from "./styles";
import HttpCLient from "../../../services/HttpClient";
import { ENVIRONMENT } from "../../../constants/environment";
import { Loading } from "../../common/styled-components/styles";
import MovieConfig from "../../../services/MovieConfig";
import LazyImage from "../../common/lazy-image";
import { Ionicons } from "@expo/vector-icons";
import moment from "moment";
export default function MoviesDetailsPage({ navigation }) {
  [loading, setLoading] = useState(false);
  [movie, setMovie] = useState({});
  [image, setImageConfig] = useState({});

  async function getDetails() {
    setLoading(true);
    const movieId = navigation.getParam("id");
    const link = `${ENVIRONMENT.API.BASE_URL}/movie/${movieId}?api_key=${ENVIRONMENT.API.KEY}&language=${ENVIRONMENT.LANGUAGE.ENGLISH}`;
    const { images } = await MovieConfig.getConfig();
    const movie = await HttpCLient.get(link);

    setImageConfig(images);
    setMovie(movie);
    setLoading(false);
  }

  useEffect(() => {
    getDetails();
  }, []);

  return (
    <Container>
      {loading ? (
        <Loading />
      ) : (
        <Details>
          <LazyImage
            navigation={navigation}
            touchable={false}
            source={{
              uri: `${image.secure_base_url}${ENVIRONMENT.IMAGE.BASE_WIDTH}${movie.poster_path}`
            }}
            smallSource={{
              uri: `${image.secure_base_url}${ENVIRONMENT.IMAGE.SMALL_WIDTH}${movie.poster_path}`
            }}
            shouldLoad={true}
          />
          <Resume>
            <ResumeRow>
              <Title>{movie.title}</Title>
            </ResumeRow>
            <ResumeRow>
              <ResumeInfo>
                <ReleaseDate>
                  <Ionicons name="md-calendar" size={15} />
                  <ReleaseText>
                    {moment(movie.release_date, "YYYY-MM-DD", true).format(
                      "DD/MM/YYYY"
                    )}
                  </ReleaseText>
                </ReleaseDate>
                <Popularity>
                  <Ionicons name="md-heart" size={15} />
                  <PopularityText>{movie.popularity}</PopularityText>
                </Popularity>
              </ResumeInfo>
            </ResumeRow>
          </Resume>
          <Bullet>
            <BulletTitle>Summary</BulletTitle>
          </Bullet>
          <Summary>{movie.overview}</Summary>
          <Bullet>
            <BulletTitle>Original title </BulletTitle>
            {movie.original_title}
          </Bullet>
          <Bullet>
            <BulletTitle>Release date </BulletTitle>
            {moment(movie.release_date, "YYYY-MM-DD", true).format(
              "DD/MM/YYYY"
            )}
          </Bullet>
          <Bullet>
            <BulletTitle>Runtime </BulletTitle>
            {movie.runtime} minutes
          </Bullet>
          <Bullet>
            <BulletTitle>Original language </BulletTitle>
            {movie.original_title}
          </Bullet>
          <Bullet>
            <BulletTitle>Homepage </BulletTitle>
            {movie.homepage}
          </Bullet>
        </Details>
      )}
    </Container>
  );
}
