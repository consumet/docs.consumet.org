const AnilistSearchSchema = {
  type: 'object',
  properties: {
    currentPage: {
      type: 'integer',
      nullable: false,
      readOnly: true,
      description: 'The current page.',
    },
    hasNextPage: {
      type: 'boolean',
      nullable: false,
      readOnly: true,
      description: 'Whether there is a next page.',
    },
    results: {
      type: 'array',
      description: 'The anime search results.',
      items: {
        $ref: `#/components/schemas/AnilistSearchResult`,
      },
    },
  },
};

const AnilistSearchResultSchema = {
  type: 'object',
  properties: {
    id: {
      type: 'string',
      nullable: false,
      readOnly: true,
      description: 'The anime id.',
    },
    title: {
      type: 'object',
      nullable: false,
      readOnly: true,
      description: 'The anime title.',
      properties: {
        romaji: {
          type: 'string',
          nullable: false,
          readOnly: true,
          description: 'The anime title romaji.',
        },
        english: {
          type: 'string',
          nullable: false,
          readOnly: true,
          description: 'The anime title english.',
        },
        native: {
          type: 'string',
          nullable: false,
          readOnly: true,
          description: 'The anime title native.',
        },
        userPreferred: {
          type: 'string',
          nullable: false,
          readOnly: true,
          description: 'The anime title user preferred.',
        },
      },
    },
    image: {
      type: 'string',
      nullable: false,
      readOnly: true,
      description: 'The anime image url.',
    },
    rating: {
      type: 'string',
      nullable: false,
      readOnly: true,
      description: 'The anime rating.',
    },
    releaseDate: {
      type: 'string',
      nullable: true,
      readOnly: true,
      description: 'The anime release date.',
    },
  },
};

const AnilistEpisodeSchema = {
  type: 'object',
  properties: {
    id: {
      type: 'string',
      nullable: false,
      readOnly: true,
      description: 'The episode id.',
    },
    number: {
      type: 'integer',
      nullable: false,
      readOnly: true,
      description: 'The episode number.',
    },
    title: {
      type: 'string',
      nullable: true,
      readOnly: true,
      description: 'The episode title.',
    },
    image: {
      type: 'string',
      nullable: false,
      readOnly: true,
      description: 'The episode image.',
    },
    description: {
      type: 'string',
      nullable: true,
      readOnly: true,
      description: 'The episode description.',
    },
  },
};

const AnilistEpisodeSourceSchema = {
  type: 'object',
  properties: {
    headers: {
      type: 'object',
      description: 'The headers that you might need to stream or download the episode.',
      properties: {
        Referer: {
          type: 'string',
          nullable: false,
          readOnly: true,
          description: 'The referer header.',
        },
      },
    },
    sources: {
      type: 'array',
      description: 'The episode sources.',
      items: {
        type: 'object',
        properties: {
          url: {
            type: 'string',
            nullable: false,
            readOnly: true,
            description: 'The source url that can be used to play the episode.',
          },
          isM3U8: {
            type: 'boolean',
            nullable: false,
            readOnly: true,
            description: 'Whether the source is a m3u8 playlist.',
          },
        },
      },
    },
  },
};

const AnilistInfoSchema = {
  type: 'object',
  properties: {
    id: {
      type: 'string',
      nullable: false,
      readOnly: true,
      description: 'The anime id.',
    },
    title: {
      type: 'object',
      nullable: false,
      readOnly: true,
      description: 'The anime title.',
      properties: {
        romaji: {
          type: 'string',
          nullable: false,
          readOnly: true,
          description: 'The anime title romaji.',
        },
        english: {
          type: 'string',
          nullable: false,
          readOnly: true,
          description: 'The anime title english.',
        },
        native: {
          type: 'string',
          nullable: false,
          readOnly: true,
          description: 'The anime title native.',
        },
        userPreferred: {
          type: 'string',
          nullable: false,
          readOnly: true,
          description: 'The anime title user preferred.',
        },
      },
    },
    malId: {
      type: 'string',
      nullable: true,
      readOnly: true,
      description: 'The anime id on MyAnimeList.',
    },
    image: {
      type: 'string',
      nullable: false,
      readOnly: true,
      description: 'The anime image url.',
    },
    description: {
      type: 'string',
      nullable: true,
      readOnly: true,
      description: 'The anime description.',
    },
    genres: {
      type: 'array',
      nullable: true,
      readOnly: true,
      description: 'The anime genres.',
      items: {
        type: 'string',
      },
    },
    releaseDate: {
      type: 'string',
      nullable: true,
      readOnly: true,
      description: 'The anime release date.',
    },
    status: {
      type: 'string',
      nullable: false,
      readOnly: true,
      description: 'The anime status.',
      enum: ['Ongoing', 'Completed', 'Not yet aired', 'Cancelled', 'Hiatus', 'Unknown'],
    },
    rating: {
      type: 'integer',
      nullable: false,
      readOnly: true,
      description: 'The anime rating.',
    },
    duration: {
      type: 'integer',
      nullable: true,
      readOnly: true,
      description: 'The anime duration in minutes',
    },
    studios: {
      type: 'array',
      nullable: true,
      readOnly: true,
      description: 'The anime studios.',
      items: {
        type: 'string',
      },
    },
    subOrDub: {
      type: 'string',
      nullable: true,
      readOnly: true,
      description: 'The anime sub or dub.',
      enum: ['sub', 'dub'],
    },
    episodes: {
      type: 'array',
      description: 'The anime episodes.',
      items: {
        $ref: '#/components/schemas/AnilistEpisode',
      },
    },
  },
};

export {
  AnilistSearchResultSchema,
  AnilistEpisodeSchema,
  AnilistInfoSchema,
  AnilistSearchSchema,
  AnilistEpisodeSourceSchema,
};
