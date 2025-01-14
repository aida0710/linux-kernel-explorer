---
sidebar_position: 14
---
# matroxfb_g450.h

### ファイル情報

- パス: `linux-v6.12/drivers/video/fbdev/matrox/matroxfb_g450.h`

### コンテンツ

```h
/* SPDX-License-Identifier: GPL-2.0 */
#ifndef __MATROXFB_G450_H__
#define __MATROXFB_G450_H__

#include "matroxfb_base.h"

#ifdef CONFIG_FB_MATROX_G
void matroxfb_g450_connect(struct matrox_fb_info *minfo);
void matroxfb_g450_shutdown(struct matrox_fb_info *minfo);
#else
static inline void matroxfb_g450_connect(struct matrox_fb_info *minfo) { };
static inline void matroxfb_g450_shutdown(struct matrox_fb_info *minfo) { };
#endif

#endif /* __MATROXFB_G450_H__ */

```
