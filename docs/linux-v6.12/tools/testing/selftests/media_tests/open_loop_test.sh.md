---
sidebar_position: 7
---
# open_loop_test.sh

### ファイル情報

- パス: `linux-v6.12/tools/testing/selftests/media_tests/open_loop_test.sh`

### コンテンツ

```sh
#!/bin/bash
# SPDX-License-Identifier: GPL-2.0
 i=0
file=/dev/media$1
 while :; do
  echo $file
  i=$((i+1))
  R=$(./media_device_open -d $file);
 # clear
  echo -e "Loop $i\n$R"
 done

```
