---
sidebar_position: 13
---
# atari_stdma.h

### ファイル情報

- パス: `linux-v6.12/arch/m68k/include/asm/atari_stdma.h`

### コンテンツ

```h
/* SPDX-License-Identifier: GPL-2.0 */

#ifndef _atari_stdma_h
#define _atari_stdma_h


#include <linux/interrupt.h>


/***************************** Prototypes *****************************/

int stdma_try_lock(irq_handler_t, void *);
void stdma_lock(irq_handler_t handler, void *data);
void stdma_release( void );
int stdma_islocked( void );
int stdma_is_locked_by(irq_handler_t);
void stdma_init( void );

/************************* End of Prototypes **************************/



#endif  /* _atari_stdma_h */

```
