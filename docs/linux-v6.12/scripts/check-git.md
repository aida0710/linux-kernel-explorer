---
sidebar_position: 10
---
# check-git

### ファイル情報

- パス: `linux-v6.12/scripts/check-git`

### コンテンツ

```txt
#!/bin/sh
# SPDX-License-Identifier: GPL-2.0-only
#
# succeed if we are in a git repository

srctree="$(dirname $0)/.."

if ! git -C "${srctree}" rev-parse --verify HEAD >/dev/null 2>/dev/null; then
	exit 1
fi

if ! test -z $(git -C "${srctree}" rev-parse --show-cdup 2>/dev/null); then
	exit 1
fi

```
