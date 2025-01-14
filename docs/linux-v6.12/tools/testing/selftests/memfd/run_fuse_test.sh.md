---
sidebar_position: 9
---
# run_fuse_test.sh

### ファイル情報

- パス: `linux-v6.12/tools/testing/selftests/memfd/run_fuse_test.sh`

### コンテンツ

```sh
#!/bin/sh
# SPDX-License-Identifier: GPL-2.0

if test -d "./mnt" ; then
	fusermount -u ./mnt
	rmdir ./mnt
fi

set -e

mkdir mnt
./fuse_mnt ./mnt
./fuse_test ./mnt/memfd $@
fusermount -u ./mnt
rmdir ./mnt

```
