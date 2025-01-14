---
sidebar_position: 8
---
# byd.h

### ファイル情報

- パス: `linux-v6.12/drivers/input/mouse/byd.h`

### コンテンツ

```h
/* SPDX-License-Identifier: GPL-2.0 */
#ifndef _BYD_H
#define _BYD_H

int byd_detect(struct psmouse *psmouse, bool set_properties);
int byd_init(struct psmouse *psmouse);

#endif /* _BYD_H */

```
