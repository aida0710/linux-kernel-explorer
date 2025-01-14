---
sidebar_position: 4
---
# default_file_splice_read.sh

### ファイル情報

- パス: `linux-v6.12/tools/testing/selftests/splice/default_file_splice_read.sh`

### コンテンツ

```sh
#!/bin/sh
# SPDX-License-Identifier: GPL-2.0
n=`./default_file_splice_read </dev/null | wc -c`

test "$n" = 0 && exit 0

echo "default_file_splice_read broken: leaked $n"
exit 1

```
