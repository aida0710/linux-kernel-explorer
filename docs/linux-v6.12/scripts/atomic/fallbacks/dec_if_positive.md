---
sidebar_position: 8
---
# dec_if_positive

### ファイル情報

- パス: `linux-v6.12/scripts/atomic/fallbacks/dec_if_positive`

### コンテンツ

```txt
cat <<EOF
	${int} dec, c = raw_${atomic}_read(v);

	do {
		dec = c - 1;
		if (unlikely(dec < 0))
			break;
	} while (!raw_${atomic}_try_cmpxchg(v, &c, dec));

	return dec;
EOF

```
