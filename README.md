# nestjs-reflect-metadata-version-issue

Last week, I had a problem with the @req object being undefined. I discovered that the issue was related to the reflect-metadata version not matching the one used by the typeorm package. To address this, I downgraded typeorm to version 0.3.19, which resolved the issue.

However, today, I encountered the same problem again, and unfortunately, the previous solution didn't work. After seeking help on the support channel, I learned of another solution that seemed to work for others: upgrading the reflect-metadata version to ^0.2.1. Despite trying this, my @req body remains undefined.

## Route to check the undefined body
I returned the request @Body on the POST /admins (admin.controller.ts).
