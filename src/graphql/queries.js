/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const getVideoFormats = /* GraphQL */ `
  query GetVideoFormats($id: ID!, $quality: String!) {
    getVideo_formats(id: $id, quality: $quality) {
      id
      quality
      url
    }
  }
`;
export const listVideoFormats = /* GraphQL */ `
  query ListVideoFormats(
    $filter: TableVideo_formatsFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listVideo_formats(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        quality
        url
      }
      nextToken
    }
  }
`;
export const getVideo = /* GraphQL */ `
  query GetVideo($id: String!) {
    getVideo(id: $id) {
      id
      title
      description
      likes
      views
      stage
    }
  }
`;
export const listVideos = /* GraphQL */ `
  query ListVideos(
    $filter: TableVideoFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listVideos(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        title
        description
        likes
        views
        stage
      }
      nextToken
    }
  }
`;
