---
sidebar_position: 5
---
# bcm63xx_dev_flash.h

### ファイル情報

- パス: `linux-v6.12/arch/mips/include/asm/mach-bcm63xx/bcm63xx_dev_flash.h`

### コンテンツ

```h
/* SPDX-License-Identifier: GPL-2.0 */
#ifndef __BCM63XX_FLASH_H
#define __BCM63XX_FLASH_H

enum {
	BCM63XX_FLASH_TYPE_PARALLEL,
	BCM63XX_FLASH_TYPE_SERIAL,
	BCM63XX_FLASH_TYPE_NAND,
};

int __init bcm63xx_flash_register(void);

#endif /* __BCM63XX_FLASH_H */

```
