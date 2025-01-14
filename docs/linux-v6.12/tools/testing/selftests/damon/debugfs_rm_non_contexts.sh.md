---
sidebar_position: 14
---
# debugfs_rm_non_contexts.sh

### ファイル情報

- パス: `linux-v6.12/tools/testing/selftests/damon/debugfs_rm_non_contexts.sh`

### コンテンツ

```sh
#!/bin/bash
# SPDX-License-Identifier: GPL-2.0

source _debugfs_common.sh

# Test putting non-ctx files/dirs to rm_contexts file
# ===================================================

dmesg -C

for file in "$DBGFS/"*
do
	(echo "$(basename "$f")" > "$DBGFS/rm_contexts") &> /dev/null
	if dmesg | grep -q BUG
	then
		dmesg
		exit 1
	fi
done

```
