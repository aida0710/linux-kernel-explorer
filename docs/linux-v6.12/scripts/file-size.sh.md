---
sidebar_position: 41
---
# file-size.sh

### ファイル情報

- パス: `linux-v6.12/scripts/file-size.sh`

### コンテンツ

```sh
#!/bin/sh
# SPDX-License-Identifier: GPL-2.0
set -- $(ls -dn "$1")
printf '%s\n' "$5"

```
