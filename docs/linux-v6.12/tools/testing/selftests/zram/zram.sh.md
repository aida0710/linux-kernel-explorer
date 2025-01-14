---
sidebar_position: 4
---
# zram.sh

### ファイル情報

- パス: `linux-v6.12/tools/testing/selftests/zram/zram.sh`

### コンテンツ

```sh
#!/bin/bash
# SPDX-License-Identifier: GPL-2.0
TCID="zram.sh"

. ./zram_lib.sh

run_zram () {
echo "--------------------"
echo "running zram tests"
echo "--------------------"
./zram01.sh
echo ""
./zram02.sh
}

check_prereqs

run_zram

```
