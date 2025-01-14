---
sidebar_position: 49
---
# touchkit_ps2.h

### ファイル情報

- パス: `linux-v6.12/drivers/input/mouse/touchkit_ps2.h`

### コンテンツ

```h
/* SPDX-License-Identifier: GPL-2.0-only */
/* ----------------------------------------------------------------------------
 * touchkit_ps2.h  --  Driver for eGalax TouchKit PS/2 Touchscreens
 *
 * Copyright (C) 2005 by Stefan Lucke
 * Copyright (c) 2005 Vojtech Pavlik
 */

#ifndef _TOUCHKIT_PS2_H
#define _TOUCHKIT_PS2_H

int touchkit_ps2_detect(struct psmouse *psmouse, bool set_properties);

#endif

```
