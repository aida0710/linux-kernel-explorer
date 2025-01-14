---
sidebar_position: 3
---
# inflate.h

### ファイル情報

- パス: `linux-v6.12/include/linux/decompress/inflate.h`

### コンテンツ

```h
/* SPDX-License-Identifier: GPL-2.0 */
#ifndef LINUX_DECOMPRESS_INFLATE_H
#define LINUX_DECOMPRESS_INFLATE_H

int gunzip(unsigned char *inbuf, long len,
	   long (*fill)(void*, unsigned long),
	   long (*flush)(void*, unsigned long),
	   unsigned char *output,
	   long *pos,
	   void(*error_fn)(char *x));
#endif

```
