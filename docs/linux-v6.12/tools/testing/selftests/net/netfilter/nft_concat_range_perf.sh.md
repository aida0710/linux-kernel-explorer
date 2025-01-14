---
sidebar_position: 21
---
# nft_concat_range_perf.sh

### ファイル情報

- パス: `linux-v6.12/tools/testing/selftests/net/netfilter/nft_concat_range_perf.sh`

### コンテンツ

```sh
#!/bin/bash
# SPDX-License-Identifier: GPL-2.0
#

source lib.sh

[ "$KSFT_MACHINE_SLOW" = yes ] && exit ${ksft_skip}

NFT_CONCAT_RANGE_TESTS="performance" exec ./nft_concat_range.sh

```
