---
sidebar_position: 45
---
# tx_common.h

### ファイル情報

- パス: `drivers/net/ethernet/sfc/siena/tx_common.h`

### コンテンツ

```h
/* SPDX-License-Identifier: GPL-2.0-only */
/****************************************************************************
 * Driver for Solarflare network controllers and boards
 * Copyright 2018 Solarflare Communications Inc.
 *
 * This program is free software; you can redistribute it and/or modify it
 * under the terms of the GNU General Public License version 2 as published
 * by the Free Software Foundation, incorporated herein by reference.
 */

#ifndef EFX_TX_COMMON_H
#define EFX_TX_COMMON_H

int efx_siena_probe_tx_queue(struct efx_tx_queue *tx_queue);
void efx_siena_init_tx_queue(struct efx_tx_queue *tx_queue);
void efx_siena_fini_tx_queue(struct efx_tx_queue *tx_queue);
void efx_siena_remove_tx_queue(struct efx_tx_queue *tx_queue);

static inline bool efx_tx_buffer_in_use(struct efx_tx_buffer *buffer)
{
	return buffer->len || (buffer->flags & EFX_TX_BUF_OPTION);
}

void efx_siena_xmit_done_check_empty(struct efx_tx_queue *tx_queue);
void efx_siena_xmit_done(struct efx_tx_queue *tx_queue, unsigned int index);

void efx_siena_enqueue_unwind(struct efx_tx_queue *tx_queue,
			      unsigned int insert_count);

struct efx_tx_buffer *efx_siena_tx_map_chunk(struct efx_tx_queue *tx_queue,
					     dma_addr_t dma_addr, size_t len);
int efx_siena_tx_map_data(struct efx_tx_queue *tx_queue, struct sk_buff *skb,
			  unsigned int segment_count);

unsigned int efx_siena_tx_max_skb_descs(struct efx_nic *efx);
int efx_siena_tx_tso_fallback(struct efx_tx_queue *tx_queue, struct sk_buff *skb);

extern bool efx_siena_separate_tx_channels;
#endif

```
