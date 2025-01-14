---
sidebar_position: 9
---
# txgbe_irq.h

### ファイル情報

- パス: `linux-v6.12/drivers/net/ethernet/wangxun/txgbe/txgbe_irq.h`

### コンテンツ

```h
/* SPDX-License-Identifier: GPL-2.0 */
/* Copyright (c) 2015 - 2024 Beijing WangXun Technology Co., Ltd. */

void txgbe_irq_enable(struct wx *wx, bool queues);
int txgbe_request_queue_irqs(struct wx *wx);
void txgbe_free_misc_irq(struct txgbe *txgbe);
int txgbe_setup_misc_irq(struct txgbe *txgbe);

```
