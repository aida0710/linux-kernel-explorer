---
sidebar_position: 33
---
# logips2pp.h

### ファイル情報

- パス: `linux-v6.12/drivers/input/mouse/logips2pp.h`

### コンテンツ

```h
/* SPDX-License-Identifier: GPL-2.0-only */
/*
 * Logitech PS/2++ mouse driver header
 *
 * Copyright (c) 2003 Vojtech Pavlik <vojtech@suse.cz>
 */

#ifndef _LOGIPS2PP_H
#define _LOGIPS2PP_H

int ps2pp_detect(struct psmouse *psmouse, bool set_properties);

#endif

```
