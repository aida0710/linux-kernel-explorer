---
sidebar_position: 7
---
# build-version

### ファイル情報

- パス: `linux-v6.12/scripts/build-version`

### コンテンツ

```txt
#!/bin/sh
# SPDX-License-Identifier: GPL-2.0-only

prev_ver=$(cat .version 2>/dev/null) &&
ver=$(expr ${prev_ver} + 1 2>/dev/null) ||
ver=1

echo ${ver} > .version

echo ${ver}

```
