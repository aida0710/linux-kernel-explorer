---
sidebar_position: 8
---
# bcm63xx_dev_pcmcia.h

### ファイル情報

- パス: `linux-v6.12/arch/mips/include/asm/mach-bcm63xx/bcm63xx_dev_pcmcia.h`

### コンテンツ

```h
/* SPDX-License-Identifier: GPL-2.0 */
#ifndef BCM63XX_DEV_PCMCIA_H_
#define BCM63XX_DEV_PCMCIA_H_

/*
 * PCMCIA driver platform data
 */
struct bcm63xx_pcmcia_platform_data {
	unsigned int ready_gpio;
};

int bcm63xx_pcmcia_register(void);

#endif /* BCM63XX_DEV_PCMCIA_H_ */

```
