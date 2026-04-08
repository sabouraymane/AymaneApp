/*
 * ─────────────────────────────────────────────────────────────
 *  HOW TO ADD YOUR VIDEOS
 *
 *  Step 1 — Upload each video to YouTube (set visibility: Unlisted)
 *  Step 2 — Copy the video ID from the URL:
 *            https://youtube.com/watch?v=  >>>  THIS_PART  <<<
 *  Step 3 — Paste it as `youtubeId` below
 *
 *  Thumbnails are fetched automatically from YouTube.
 *  You can override with your own `thumb` URL if needed.
 *
 *  ⚠️  Google Drive links cannot be used for video playback.
 *      They block direct streaming — use YouTube Unlisted instead.
 * ─────────────────────────────────────────────────────────────
 */

export const videos = [
  {
    id: 1,
    youtubeId: 'aqz-KE-bpKQ',          // ← replace with your YouTube ID
    title: 'Cinematic Reel',
    desc:  'Color graded travel montage',
    tag:   'Cinematic',
  },
  {
    id: 2,
    youtubeId: 'LXb3EKWsInQ',          // ← replace with your YouTube ID
    title: 'Brand Story',
    desc:  'Commercial edit · motion graphics',
    tag:   'Commercial',
  },
  {
    id: 3,
    youtubeId: 'ScMzIvxBSi4',          // ← replace with your YouTube ID
    title: 'Short Film',
    desc:  'Narrative edit · sound design',
    tag:   'Film',
  },
  {
    id: 4,
    youtubeId: 'M7lc1UVf-VE',          // ← replace with your YouTube ID
    title: 'Music Video',
    desc:  'Sync-cut edit · color grade',
    tag:   'Music',
  },
  {
    id: 5,
    youtubeId: 'ZZ5LpwO-An4',          // ← replace with your YouTube ID
    title: 'Social Reel',
    desc:  'Vertical format · optimized for reach',
    tag:   'Social',
  },
  {
    id: 6,
    youtubeId: 'aqz-KE-bpKQ',          // ← replace with your YouTube ID
    title: 'Event Highlight',
    desc:  'Live event coverage · dynamic cuts',
    tag:   'Event',
  },
]
