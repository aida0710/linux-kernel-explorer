---
sidebar_position: 610
---
# kbd_diacr.h

### ファイル情報

- パス: `linux-v6.12/include/linux/kbd_diacr.h`

### コンテンツ

```h
/* SPDX-License-Identifier: GPL-2.0 */
#ifndef _DIACR_H
#define _DIACR_H
#include <linux/kd.h>

extern struct kbdiacruc accent_table[];
extern unsigned int accent_table_size;

#endif /* _DIACR_H */

```
