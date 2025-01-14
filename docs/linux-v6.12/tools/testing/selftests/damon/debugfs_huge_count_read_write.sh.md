---
sidebar_position: 13
---
# debugfs_huge_count_read_write.sh

### ファイル情報

- パス: `linux-v6.12/tools/testing/selftests/damon/debugfs_huge_count_read_write.sh`

### コンテンツ

```sh
#!/bin/bash
# SPDX-License-Identifier: GPL-2.0

source _debugfs_common.sh

# Test huge count read write
# ==========================

dmesg -C

for file in "$DBGFS/"*
do
	./huge_count_read_write "$file"
done

if dmesg | grep -q WARNING
then
	dmesg
	exit 1
else
	exit 0
fi

```
