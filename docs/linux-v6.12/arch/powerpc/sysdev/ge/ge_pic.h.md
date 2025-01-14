---
sidebar_position: 2
---
# ge_pic.h

### ファイル情報

- パス: `linux-v6.12/arch/powerpc/sysdev/ge/ge_pic.h`

### コンテンツ

```h
/* SPDX-License-Identifier: GPL-2.0 */
#ifndef __GEF_PIC_H__
#define __GEF_PIC_H__

unsigned int gef_pic_get_irq(void);
void gef_pic_init(struct device_node *);

#endif /* __GEF_PIC_H__ */


```
