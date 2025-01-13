# chalk-logger

A simple, lightweight development logger for Node.js using `chalk`.

## Import

```bash
import log from './logger';
```

## Basic Usage

```bash
log.info('This is an info message');
log.error('This is an error message');
```

## Usage with data

```bash
log.info('This is an info message', info);
log.error('This is an error message', error);
```

## Environment

The logger uses the `NODE_ENV` environment variable to decide the output style. It applies color with chalk only when `NODE_ENV` is set to `development`.

## License

This project is licensed under the MIT License - see the [LICENSE](./LICENSE) file for details.
