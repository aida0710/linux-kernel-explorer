---
sidebar_position: 20
---
# debugfs_target_ids_read_before_terminate_race.sh

### ファイル情報

- パス: `linux-v6.12/tools/testing/selftests/damon/debugfs_target_ids_read_before_terminate_race.sh`

### コンテンツ

```sh
#!/bin/bash
# SPDX-License-Identifier: GPL-2.0

dmesg -C

./debugfs_target_ids_read_before_terminate_race 5000

if dmesg | grep -q dbgfs_target_ids_read
then
	dmesg
	exit 1
else
	exit 0
fi

```
