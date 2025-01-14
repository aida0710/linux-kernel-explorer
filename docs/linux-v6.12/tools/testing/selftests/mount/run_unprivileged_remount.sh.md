---
sidebar_position: 6
---
# run_unprivileged_remount.sh

### ファイル情報

- パス: `linux-v6.12/tools/testing/selftests/mount/run_unprivileged_remount.sh`

### コンテンツ

```sh
#!/bin/bash
# SPDX-License-Identifier: GPL-2.0
# Kselftest framework requirement - SKIP code is 4.
ksft_skip=4

# Run mount selftests
if [ -f /proc/self/uid_map ] ; then
	./unprivileged-remount-test ;
else
	echo "WARN: No /proc/self/uid_map exist, test skipped." ;
	exit $ksft_skip
fi

```
