---
sidebar_position: 5
---
# unlz4.h

### ファイル情報

- パス: `linux-v6.12/include/linux/decompress/unlz4.h`

### コンテンツ

```h
/* SPDX-License-Identifier: GPL-2.0 */
#ifndef DECOMPRESS_UNLZ4_H
#define DECOMPRESS_UNLZ4_H

int unlz4(unsigned char *inbuf, long len,
	long (*fill)(void*, unsigned long),
	long (*flush)(void*, unsigned long),
	unsigned char *output,
	long *pos,
	void(*error)(char *x));
#endif

```
