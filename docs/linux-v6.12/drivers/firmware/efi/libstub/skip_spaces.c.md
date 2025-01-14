---
sidebar_position: 31
---
# skip_spaces.c

### ファイル情報

- パス: `linux-v6.12/drivers/firmware/efi/libstub/skip_spaces.c`

### コンテンツ

```c
// SPDX-License-Identifier: GPL-2.0

#include <linux/ctype.h>
#include <linux/string.h>
#include <linux/types.h>

char *skip_spaces(const char *str)
{
	while (isspace(*str))
		++str;
	return (char *)str;
}

```
