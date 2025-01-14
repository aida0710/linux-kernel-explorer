---
sidebar_position: 97
---
# blk-mq-pci.h

### ファイル情報

- パス: `linux-v6.12/include/linux/blk-mq-pci.h`

### コンテンツ

```h
/* SPDX-License-Identifier: GPL-2.0 */
#ifndef _LINUX_BLK_MQ_PCI_H
#define _LINUX_BLK_MQ_PCI_H

struct blk_mq_queue_map;
struct pci_dev;

void blk_mq_pci_map_queues(struct blk_mq_queue_map *qmap, struct pci_dev *pdev,
			   int offset);

#endif /* _LINUX_BLK_MQ_PCI_H */

```
