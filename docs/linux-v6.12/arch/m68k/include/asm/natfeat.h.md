---
sidebar_position: 116
---
# natfeat.h

### ファイル情報

- パス: `linux-v6.12/arch/m68k/include/asm/natfeat.h`

### コンテンツ

```h
/*
 * ARAnyM hardware support via Native Features (natfeats)
 *
 * Copyright (c) 2005 Petr Stehlik of ARAnyM dev team
 *
 * This software may be used and distributed according to the terms of
 * the GNU General Public License (GPL), incorporated herein by reference.
 */
#include <linux/compiler.h>

#ifndef _NATFEAT_H
#define _NATFEAT_H

long nf_get_id(const char *feature_name);
long nf_call(long id, ...);

void nf_init(void);
void nf_shutdown(void);

void nfprint(const char *fmt, ...)
	__printf(1, 2);

# endif /* _NATFEAT_H */

```
