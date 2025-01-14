---
sidebar_position: 5
---
# hlwd-pic.h

### ファイル情報

- パス: `linux-v6.12/arch/powerpc/platforms/embedded6xx/hlwd-pic.h`

### コンテンツ

```h
/* SPDX-License-Identifier: GPL-2.0-or-later */
/*
 * arch/powerpc/platforms/embedded6xx/hlwd-pic.h
 *
 * Nintendo Wii "Hollywood" interrupt controller support.
 * Copyright (C) 2009 The GameCube Linux Team
 * Copyright (C) 2009 Albert Herranz
 */

#ifndef __HLWD_PIC_H
#define __HLWD_PIC_H

extern unsigned int hlwd_pic_get_irq(void);
void __init hlwd_pic_probe(void);
extern void hlwd_quiesce(void);

#endif

```
