---
sidebar_position: 4
---
# aic94xx_dump.h

### ファイル情報

- パス: `linux-v6.12/drivers/scsi/aic94xx/aic94xx_dump.h`

### コンテンツ

```h
/* SPDX-License-Identifier: GPL-2.0-only */
/*
 * Aic94xx SAS/SATA driver dump header file.
 *
 * Copyright (C) 2005 Adaptec, Inc.  All rights reserved.
 * Copyright (C) 2005 Luben Tuikov <luben_tuikov@adaptec.com>
 */

#ifndef _AIC94XX_DUMP_H_
#define _AIC94XX_DUMP_H_

#ifdef ASD_DEBUG

void asd_dump_seq_state(struct asd_ha_struct *asd_ha, u8 lseq_mask);
void asd_dump_frame_rcvd(struct asd_phy *phy,
			 struct done_list_struct *dl);
#else /* ASD_DEBUG */

static inline void asd_dump_seq_state(struct asd_ha_struct *asd_ha,
				      u8 lseq_mask) { }
static inline void asd_dump_frame_rcvd(struct asd_phy *phy,
				       struct done_list_struct *dl) { }
#endif /* ASD_DEBUG */

#endif /* _AIC94XX_DUMP_H_ */

```
