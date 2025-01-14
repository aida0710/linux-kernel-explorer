---
sidebar_position: 116
---
# pahole-version.sh

### ファイル情報

- パス: `linux-v6.12/scripts/pahole-version.sh`

### コンテンツ

```sh
#!/bin/sh
# SPDX-License-Identifier: GPL-2.0
#
# Usage: $ ./pahole-version.sh pahole
#
# Prints pahole's version in a 3-digit form, such as 119 for v1.19.

if [ ! -x "$(command -v "$@")" ]; then
	echo 0
	exit 1
fi

"$@" --version | sed -E 's/v([0-9]+)\.([0-9]+)/\1\2/'

```
