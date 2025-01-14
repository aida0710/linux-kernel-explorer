---
sidebar_position: 3
---
# mvme16x.h

### ファイル情報

- パス: `linux-v6.12/arch/m68k/mvme16x/mvme16x.h`

### コンテンツ

```h
/* SPDX-License-Identifier: GPL-2.0-only */

struct console;

/* config.c */
void mvme16x_cons_write(struct console *co, const char *str, unsigned count);

```
