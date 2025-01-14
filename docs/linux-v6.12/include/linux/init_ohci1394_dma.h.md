---
sidebar_position: 521
---
# init_ohci1394_dma.h

### ファイル情報

- パス: `linux-v6.12/include/linux/init_ohci1394_dma.h`

### コンテンツ

```h
/* SPDX-License-Identifier: GPL-2.0 */
#ifdef CONFIG_PROVIDE_OHCI1394_DMA_INIT
extern int __initdata init_ohci1394_dma_early;
extern void __init init_ohci1394_dma_on_all_controllers(void);
#endif

```
