---
sidebar_position: 25
---
# s5p_mfc_intr.h

### ファイル情報

- パス: `linux-v6.12/drivers/media/platform/samsung/s5p-mfc/s5p_mfc_intr.h`

### コンテンツ

```h
/* SPDX-License-Identifier: GPL-2.0-only */
/*
 * drivers/media/platform/samsung/mfc5/s5p_mfc_intr.h
 *
 * Header file for Samsung MFC (Multi Function Codec - FIMV) driver
 * It contains waiting functions declarations.
 *
 * Kamil Debski, Copyright (C) 2011 Samsung Electronics
 * http://www.samsung.com/
 */

#ifndef S5P_MFC_INTR_H_
#define S5P_MFC_INTR_H_

#include "s5p_mfc_common.h"

int s5p_mfc_wait_for_done_ctx(struct s5p_mfc_ctx *ctx,
			      int command, int interrupt);
int s5p_mfc_wait_for_done_dev(struct s5p_mfc_dev *dev, int command);
void s5p_mfc_clean_ctx_int_flags(struct s5p_mfc_ctx *ctx);
void s5p_mfc_clean_dev_int_flags(struct s5p_mfc_dev *dev);

#endif /* S5P_MFC_INTR_H_ */

```
