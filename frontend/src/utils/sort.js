export function voteScoreSort (values) {
  return values.sort((post1, post2) => {
    if (post1.voteScore <= post2.voteScore) {
      return 1
    } else {
      return -1
    }
  })
}

export function timestampSort (values) {
  return values.sort((post1, post2) => {
    if (post1.timestamp <= post2.timestamp) {
      return 1
    } else {
      return -1
    }
  })
}