---
sidebar_position: 20
---
# ionic_rx_filter.h

### ファイル情報

- パス: `drivers/net/ethernet/pensando/ionic/ionic_rx_filter.h`

### コンテンツ

```h
/* SPDX-License-Identifier: GPL-2.0 */
/* Copyright(c) 2017 - 2019 Pensando Systems, Inc */

#ifndef _IONIC_RX_FILTER_H_
#define _IONIC_RX_FILTER_H_

#define IONIC_RXQ_INDEX_ANY		(0xFFFF)

enum ionic_filter_state {
	IONIC_FILTER_STATE_SYNCED,
	IONIC_FILTER_STATE_NEW,
	IONIC_FILTER_STATE_OLD,
};

struct ionic_rx_filter {
	u32 flow_id;
	u32 filter_id;
	u16 rxq_index;
	enum ionic_filter_state state;
	struct ionic_rx_filter_add_cmd cmd;
	struct hlist_node by_hash;
	struct hlist_node by_id;
};

#define IONIC_RX_FILTER_HASH_BITS	10
#define IONIC_RX_FILTER_HLISTS		BIT(IONIC_RX_FILTER_HASH_BITS)
#define IONIC_RX_FILTER_HLISTS_MASK	(IONIC_RX_FILTER_HLISTS - 1)
struct ionic_rx_filters {
	spinlock_t lock;				    /* filter list lock */
	struct hlist_head by_hash[IONIC_RX_FILTER_HLISTS];  /* by skb hash */
	struct hlist_head by_id[IONIC_RX_FILTER_HLISTS];    /* by filter_id */
};

void ionic_rx_filter_free(struct ionic_lif *lif, struct ionic_rx_filter *f);
void ionic_rx_filter_replay(struct ionic_lif *lif);
int ionic_rx_filters_init(struct ionic_lif *lif);
void ionic_rx_filters_deinit(struct ionic_lif *lif);
int ionic_rx_filter_save(struct ionic_lif *lif, u32 flow_id, u16 rxq_index,
			 u32 hash, struct ionic_admin_ctx *ctx,
			 enum ionic_filter_state state);
struct ionic_rx_filter *ionic_rx_filter_by_vlan(struct ionic_lif *lif, u16 vid);
struct ionic_rx_filter *ionic_rx_filter_by_addr(struct ionic_lif *lif, const u8 *addr);
struct ionic_rx_filter *ionic_rx_filter_rxsteer(struct ionic_lif *lif);
void ionic_rx_filter_sync(struct ionic_lif *lif);
int ionic_lif_list_addr(struct ionic_lif *lif, const u8 *addr, bool mode);
int ionic_lif_vlan_add(struct ionic_lif *lif, const u16 vid);
int ionic_lif_vlan_del(struct ionic_lif *lif, const u16 vid);

#endif /* _IONIC_RX_FILTER_H_ */

```
