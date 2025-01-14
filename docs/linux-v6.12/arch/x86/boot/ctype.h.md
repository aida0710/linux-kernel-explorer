---
sidebar_position: 13
---
# ctype.h

### ファイル情報

- パス: `linux-v6.12/arch/x86/boot/ctype.h`

### コンテンツ

```h
/* SPDX-License-Identifier: GPL-2.0 */
#ifndef BOOT_CTYPE_H
#define BOOT_CTYPE_H

static inline int isdigit(int ch)
{
	return (ch >= '0') && (ch <= '9');
}

static inline int isxdigit(int ch)
{
	if (isdigit(ch))
		return true;

	if ((ch >= 'a') && (ch <= 'f'))
		return true;

	return (ch >= 'A') && (ch <= 'F');
}

#endif

```
