---
sidebar_position: 3
---
# bcm63xx_smp.h

### ファイル情報

- パス: `linux-v6.12/arch/arm/mach-bcm/bcm63xx_smp.h`

### コンテンツ

```h
/* SPDX-License-Identifier: GPL-2.0 */
#ifndef __BCM63XX_SMP_H
#define __BCM63XX_SMP_H

struct device_node;

extern int bcm63xx_pmb_power_on_cpu(struct device_node *dn);

#endif /* __BCM63XX_SMP_H */

```
