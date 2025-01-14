---
sidebar_position: 4
---
# nitrox_algs.c

### ファイル情報

- パス: `linux-v6.12/drivers/crypto/cavium/nitrox/nitrox_algs.c`

### コンテンツ

```c
#include "nitrox_common.h"

int nitrox_crypto_register(void)
{
	int err;

	err = nitrox_register_skciphers();
	if (err)
		return err;

	err = nitrox_register_aeads();
	if (err) {
		nitrox_unregister_skciphers();
		return err;
	}

	return 0;
}

void nitrox_crypto_unregister(void)
{
	nitrox_unregister_aeads();
	nitrox_unregister_skciphers();
}

```
