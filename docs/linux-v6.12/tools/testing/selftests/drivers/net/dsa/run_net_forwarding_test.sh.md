---
sidebar_position: 11
---
# run_net_forwarding_test.sh

### ファイル情報

- パス: `linux-v6.12/tools/testing/selftests/drivers/net/dsa/run_net_forwarding_test.sh`

### コンテンツ

```sh
#!/bin/bash
# SPDX-License-Identifier: GPL-2.0

libdir=$(dirname "$(readlink -f "${BASH_SOURCE[0]}")")
testname=$(basename "${BASH_SOURCE[0]}")

source "$libdir"/forwarding.config
cd "$libdir"/../../../net/forwarding/ || exit 1
source "./$testname" "$@"

```
