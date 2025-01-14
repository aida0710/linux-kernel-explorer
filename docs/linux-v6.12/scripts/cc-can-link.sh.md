---
sidebar_position: 8
---
# cc-can-link.sh

### ファイル情報

- パス: `linux-v6.12/scripts/cc-can-link.sh`

### コンテンツ

```sh
#!/bin/sh
# SPDX-License-Identifier: GPL-2.0

cat << "END" | $@ -x c - -o /dev/null >/dev/null 2>&1
#include <stdio.h>
int main(void)
{
	printf("");
	return 0;
}
END

```
