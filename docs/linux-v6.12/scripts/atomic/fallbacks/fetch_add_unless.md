---
sidebar_position: 11
---
# fetch_add_unless

### ファイル情報

- パス: `linux-v6.12/scripts/atomic/fallbacks/fetch_add_unless`

### コンテンツ

```txt
cat << EOF
	${int} c = raw_${atomic}_read(v);

	do {
		if (unlikely(c == u))
			break;
	} while (!raw_${atomic}_try_cmpxchg(v, &c, c + a));

	return c;
EOF

```
