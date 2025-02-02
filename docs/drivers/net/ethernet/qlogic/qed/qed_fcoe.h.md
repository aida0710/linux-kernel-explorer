---
sidebar_position: 16
---
# qed_fcoe.h

### ファイル情報

- パス: `drivers/net/ethernet/qlogic/qed/qed_fcoe.h`

### コンテンツ

```h
/* SPDX-License-Identifier: (GPL-2.0-only OR BSD-3-Clause) */
/* QLogic qed NIC Driver
 * Copyright (c) 2015-2017  QLogic Corporation
 * Copyright (c) 2019-2020 Marvell International Ltd.
 */

#ifndef _QED_FCOE_H
#define _QED_FCOE_H
#include <linux/types.h>
#include <linux/list.h>
#include <linux/slab.h>
#include <linux/spinlock.h>
#include <linux/qed/qed_fcoe_if.h>
#include <linux/qed/qed_chain.h>
#include "qed.h"
#include "qed_hsi.h"
#include "qed_mcp.h"
#include "qed_sp.h"

struct qed_fcoe_info {
	spinlock_t lock; /* Connection resources. */
	struct list_head free_list;
};

#if IS_ENABLED(CONFIG_QED_FCOE)
int qed_fcoe_alloc(struct qed_hwfn *p_hwfn);

void qed_fcoe_setup(struct qed_hwfn *p_hwfn);

void qed_fcoe_free(struct qed_hwfn *p_hwfn);
/**
 * qed_get_protocol_stats_fcoe(): Fills provided statistics
 *				  struct with statistics.
 *
 * @cdev: Qed dev pointer.
 * @stats: Points to struct that will be filled with statistics.
 * @is_atomic: Hint from the caller - if the func can sleep or not.
 *
 * Context: The function should not sleep in case is_atomic == true.
 * Return: Void.
 */
void qed_get_protocol_stats_fcoe(struct qed_dev *cdev,
				 struct qed_mcp_fcoe_stats *stats,
				 bool is_atomic);
#else /* CONFIG_QED_FCOE */
static inline int qed_fcoe_alloc(struct qed_hwfn *p_hwfn)
{
	return -EINVAL;
}

static inline void qed_fcoe_setup(struct qed_hwfn *p_hwfn) {}
static inline void qed_fcoe_free(struct qed_hwfn *p_hwfn) {}

static inline void qed_get_protocol_stats_fcoe(struct qed_dev *cdev,
					       struct qed_mcp_fcoe_stats *stats,
					       bool is_atomic)
{
}
#endif /* CONFIG_QED_FCOE */

#endif /* _QED_FCOE_H */

```
