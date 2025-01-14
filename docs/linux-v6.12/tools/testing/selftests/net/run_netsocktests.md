---
sidebar_position: 87
---
# run_netsocktests

### ファイル情報

- パス: `linux-v6.12/tools/testing/selftests/net/run_netsocktests`

### コンテンツ

```txt
#!/bin/sh
# SPDX-License-Identifier: GPL-2.0

echo "--------------------"
echo "running socket test"
echo "--------------------"
./socket
if [ $? -ne 0 ]; then
	echo "[FAIL]"
	exit 1
else
	echo "[PASS]"
fi

```
