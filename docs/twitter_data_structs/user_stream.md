User Stream
===========

## Friends List
The first data structure passed to the stream consumer by Twitter is the
friends list for the authenticated Twitter user:

```JSON
{
  "friends": [
    13479,
    194242880,
    849101,
    212256947,
    57475538,
    5702,
    32073913,
    74487866,
    1108786884,
    188768528,
    220045059,
    599679665,
    15392038,
    7386292,
    657863,
    45645493,
    6453542,
    34174192,
    20,
    14504449,
    72934491,
    9717342,
    18944209,
    12,
    16261707,
    15029296,
    32967328,
    12551,
    27746120
  ]
}
```

It's passed to the callback as soon as the connection is made to the stream.

## Updates (Tweets)
After the friends list is sent, it is followed by updates from the users that
the authenticated Twitter user follows. Each update looks something like this:

```JSON
{
  "created_at": "Sat Nov 09 03:01:06 +0000 2013",
  "id": 399008720270540800,
  "id_str": "399008720270540800",
  "text": "Philippine Coast Guard says 3,398 people stranded sea on multiple watercraft. http://t.co/tLToJLWJcA",
  "source": "web",
  "truncated": false,
  "in_reply_to_status_id": null,
  "in_reply_to_status_id_str": null,
  "in_reply_to_user_id": null,
  "in_reply_to_user_id_str": null,
  "in_reply_to_screen_name": null,
  "user": {
    "id": 428333,
    "id_str": "428333",
    "name": "CNN Breaking News",
    "screen_name": "cnnbrk",
    "location": "Everywhere",
    "url": "http://cnn.com/",
    "description": "Breaking News from CNN, via the http://CNN.com homepage team. Now 14M strong. Check @cnn for all things CNN, breaking and more.",
    "protected": false,
    "followers_count": 14012258,
    "friends_count": 90,
    "listed_count": 143822,
    "created_at": "Tue Jan 02 01:48:14 +0000 2007",
    "favourites_count": 11,
    "utc_offset": -18000,
    "time_zone": "Eastern Time (US & Canada)",
    "geo_enabled": false,
    "verified": true,
    "statuses_count": 27955,
    "lang": "en",
    "contributors_enabled": false,
    "is_translator": false,
    "profile_background_color": "323232",
    "profile_background_image_url": "http://a0.twimg.com/profile_background_images/17349501/CNN_Twitter_Background_05.2009.GIF",
    "profile_background_image_url_https": "https://si0.twimg.com/profile_background_images/17349501/CNN_Twitter_Background_05.2009.GIF",
    "profile_background_tile": false,
    "profile_image_url": "http://pbs.twimg.com/profile_images/1762504301/128x128_cnnbrk_avatar_normal.gif",
    "profile_image_url_https": "https://pbs.twimg.com/profile_images/1762504301/128x128_cnnbrk_avatar_normal.gif",
    "profile_link_color": "004287",
    "profile_sidebar_border_color": "DADADA",
    "profile_sidebar_fill_color": "EEEEEE",
    "profile_text_color": "000000",
    "profile_use_background_image": true,
    "default_profile": false,
    "default_profile_image": false,
    "following": null,
    "follow_request_sent": null,
    "notifications": null
  },
  "geo": null,
  "coordinates": null,
  "place": null,
  "contributors": null,
  "retweet_count": 0,
  "favorite_count": 0,
  "entities": {
    "hashtags": [],
    "symbols": [],
    "urls": [
      {
        "url": "http://t.co/tLToJLWJcA",
        "expanded_url": "http://cnn.it/1beQwn8",
        "display_url": "cnn.it/1beQwn8",
        "indices": [
          78,
          100
        ]
      }
    ],
    "user_mentions": []
  },
  "favorited": false,
  "retweeted": false,
  "possibly_sensitive": false,
  "filter_level": "medium",
  "lang": "en"
}
```
